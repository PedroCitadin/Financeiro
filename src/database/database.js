import SQLite from 'react-native-sqlite-storage';


const database_name = "MainDB.db";
const database_version = '1.0';
const database_displayname = 'MainDB';
const database_size = 200000;

const db = SQLite.openDatabase(
    {
      name: database_name,
      version: database_version,
      displayName: database_displayname,
      size: database_size,
    },
    () => {
      console.log('Banco de dados aberto com sucesso');
      createTables();
    },
    (error) => {
      console.log('Erro ao abrir o banco de dados:', error);
    },
  );




export const initDatabase = () => {
    db.transaction((tx) => {
      tx.executeSql(
        'CREATE DATABASE IF NOT EXISTS MainDB',
        [],
        () => {
          console.log('Banco de dados criado com sucesso');
          createTables();
        },
        (error) => {
          console.log('Erro ao criar o banco de dados:', error);
        },
      );
    });
  };



  const createTables = () => {
    db.transaction((tx) => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS Transacoes (id INTEGER PRIMARY KEY AUTOINCREMENT, descricao TEXT, valor REAL, data DATE)',
        [],
        () => {
          console.log('Tabela Transacoes criada com sucesso');
        },
        (error) => {
          console.log('Erro ao criar tabela Transacoes:', error);
        },
      );
    });
    db.transaction((tx) => {
        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS Orcamento (id INTEGER PRIMARY KEY AUTOINCREMENT, ano INTEGER, valor REAL)',
          [],
          () => {
            console.log('Tabela Orcamento criada com sucesso');
          },
          (error) => {
            console.log('Erro ao criar tabela Orcamento:', error);
          },
        );
      });
  };

  export const insertTransacao = (descricao, valor, data) => {
    db.transaction((tx) => {
      tx.executeSql(
        'INSERT INTO Transacoes (descricao, valor, data) VALUES (?, ?, ?)',
        [descricao, valor, data.toISOString().split('T')[0]],
        () => {
          console.log('Transação inserida com sucesso');
        },
        (error) => {
          console.log('Erro ao inserir transação:', error);
        },
      );
    });
  };

  export const insertOrcamento= (ano, valor) => {
    db.transaction((tx) => {
      tx.executeSql(
        'INSERT INTO Orcamento (ano, valor) VALUES ( ?, ?)',
        [ano, valor],
        () => {
          console.log('Orcamento inserido com sucesso');
        },
        (error) => {
          console.log('Erro ao inserir Orcamento:', error);
        },
      );
    });
  };


  export const getTransacoes = (mes, ano) => {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          'SELECT * FROM Transacoes WHERE strftime("%m", data) = ? AND strftime("%Y", data) = ? order by data desc',
          [mes.toString().padStart(2, '0'), ano.toString()],
          (tx, results) => {
            
            resolve(results.rows);
          },
          (error) => {
            console.log('Erro ao buscar transações:', error);
            reject(error);
          },
        );
      });
    });
  };


  export const getOrcamento = (ano) => {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          'SELECT * FROM Orcamento WHERE ano = ?',
          [ano],
          (tx, results) => {
            
            resolve(results.rows);
          },
          (error) => {
            console.log('Erro ao buscar Orcamento:', error);
            reject(error);
          },
        );
      });
    });
  };

  export const updateOrcamento = (ano, valor) => {
    db.transaction((tx) => {
      tx.executeSql(
        'UPDATE Orcamento SET valor = ? WHERE ano = ?',
        [valor, ano],
        () => {
          console.log('Orcamento atualizado com sucesso');
        },
        (error) => {
          console.log('Erro ao atualizar Orcamento:', error);
        },
      );
    });
  };

  export const verificaAnoOrcamento = (ano) => {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          'SELECT * FROM Orcamento WHERE ano = ?',
          [ano],
          (tx, results) => {
                if(results.rows.length==0){
                    resolve(false)
                }else{
                    resolve(true)
                }
                
            
        },
          (error) => {
            console.log('Erro ao buscar Orcamento:', error);
            reject(error);
          },
        );
      });
    });
  };

  export const excluirTransacao = (id) => {
    db.transaction((tx) => {
      tx.executeSql(
        'DELETE FROM Transacoes WHERE id = ?',
        [id],
        () => {
          console.log('Transação excluída com sucesso');
        },
        (error) => {
          console.log('Erro ao excluir transação:', error);
        },
      );
    });
  };



  export const obterSomaTransacoesPorAno = (ano) => {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          'SELECT SUM(valor) AS total FROM Transacoes WHERE strftime("%Y", data) = ?',
          [ano.toString()],
          (tx, results) => {
            const { total } = results.rows.item(0);
            resolve(total || 0);
          },
          (error) => {
            console.log('Erro ao obter a soma das transações por ano:', error);
            reject(error);
          }
        );
      });
    });
  };



  export const buscarGastosMensais = (ano) => {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          `SELECT strftime("%m", T.data) AS mes, SUM(T.valor) AS totalGastos, (SUM(T.valor) * 100 / O.valor) AS percentualOrcamento
          FROM Transacoes T, Orcamento O
          WHERE  strftime("%Y", T.data) = ? AND strftime("%Y", T.data) = O.ano
          GROUP BY mes`,
          [ano],
          (tx, results) => {
            const gastosMensais = [];
            for (let i = 0; i < results.rows.length; i++) {
              const row = results.rows.item(i);
              gastosMensais.push({
                mes: row.mes,
                totalGastos: row.totalGastos,
                percentualOrcamento: row.percentualOrcamento,
              });
            }
            resolve(gastosMensais);
          },
          (error) => {
            console.log('Erro ao buscar gastos mensais:', error);
            reject(error);
          }
        );
      });
    });
  };
  
  
  