# Aplicativo de Controle Financeiro

Este é um aplicativo de controle financeiro que permite aos usuários gerenciar suas transações e visualizar relatórios financeiros. O aplicativo foi desenvolvido usando React Native e integra um banco de dados SQLite para armazenar as informações das transações.

## Funcionalidades

- Registro de transações: Os usuários podem adicionar novas transações, incluindo descrição, valor e data.
- Listagem de transações: As transações são exibidas em uma lista, mostrando a descrição, o valor e a data.
- Exclusão de transações: Os usuários podem excluir transações existentes.
- Relatório de gastos mensais: O aplicativo exibe um gráfico de linha mostrando os gastos totais por mês.
- Relatório de porcentagem do orçamento: Um gráfico de barras é exibido, mostrando a porcentagem dos gastos em relação ao orçamento anual.

## Pré-requisitos

- Node.js instalado
- Ambiente de desenvolvimento React Native configurado

## Instalação

1. Clone este repositório para o seu ambiente local.

```bash
git clone https://github.com/seu-usuario/controle-financeiro.git
```

2. Acesse o diretório do projeto.

```bash
cd controle-financeiro
```

3. Instale as dependências do projeto.

```bash
npm install
```

## Configuração do Banco de Dados

1. Certifique-se de ter o SQLite instalado em seu ambiente.
2. No arquivo `db.js`, localize a função `initDatabase` e ajuste o nome e a localização do arquivo de banco de dados, se necessário.
3. Execute o seguinte comando para criar as tabelas necessárias no banco de dados:

```bash
npx react-native db:create
```

## Executando o aplicativo

Certifique-se de que você possui um ambiente de desenvolvimento React Native configurado para executar o aplicativo em um emulador ou dispositivo físico.

1. Inicie o servidor de desenvolvimento do React Native.

```bash
npx react-native start
```

2. Execute o aplicativo em um emulador ou dispositivo físico.

```bash
npx react-native run-android    # Para dispositivos Android
npx react-native run-ios        # Para dispositivos iOS
```

Certifique-se de que o emulador ou dispositivo esteja conectado e pronto para depuração.

O aplicativo será compilado e executado no emulador ou dispositivo. Você verá a tela inicial do aplicativo de controle financeiro.

## Uso do Aplicativo

Após executar o aplicativo, você pode explorar as seguintes funcionalidades:

- Adicionar uma nova transação: Toque no botão de adicionar (+) e preencha os detalhes da transação, incluindo descrição, valor e data.
- Visualizar lista de transações: A lista de transações será exibida na tela principal, mostrando a descrição, o valor e a data.
- Excluir uma transação: Deslize para a esquerda em uma transação na lista e toque no ícone de lixeira para excluí-la.
- Visualizar relatórios financeiros: Toque no botão de relatórios na parte inferior da tela para visualizar os gráficos de gastos mensais e porcentagem do orçamento.

## Personalização

Este é um aplicativo de exemplo e pode ser personalizado e estendido para atender às suas necessidades específicas. Algumas áreas que você pode considerar personalizar incluem:

- Adição de mais campos às transações, como categoria, método de pagamento, etc.
- Melhoria do design e layout das telas.
- Implementação de recursos adicionais, como filtragem de transações, categorização, configurações de orçamento, etc.

Sinta-se à vontade para explorar o código-fonte, entender como as diferentes partes do aplicativo funcionam e adaptá-lo ao seu projeto.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

## Conclusão

Este é um aplicativo de controle financeiro básico desenvolvido com React Native e SQLite. Ele demonstra como registrar transações, exibir listas, excluir registros e visualizar relatórios financeiros simples.

Espero que este aplicativo de exemplo seja útil para você entender e explorar o desenvolvimento de aplicativos de controle financeiro usando o React Native.

Se você tiver alguma dúvida ou precisar de ajuda, não hesite em entrar em contato.

Aproveite e divirta-se codificando!
