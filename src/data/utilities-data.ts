import { v4 as uuidv4 } from "uuid";
import { UTILITIES_CODE } from "./utilities-code";

interface IUtilities {
  id: string;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  code: {
    titleFile: string;
    exampleCode: string;
    languageName: string;
  };
}

export const UTILITIES_DATA: IUtilities[] = [
  {
    id: uuidv4(),
    title: "Copy text to clipboard",
    description:
      'Esta função, copyTextToClipboard, permite copiar um texto para a área de transferência do navegador. Ela utiliza a API navigator.clipboard.writeText(text) para executar a operação de cópia, o que possibilita que os usuários copiem facilmente o texto fornecido como parâmetro para a área de transferência do dispositivo. Essa funcionalidade é comumente usada em aplicações da web para facilitar o compartilhamento de informações, como códigos de cupom, links ou mensagens.',
    createdAt: "12/02/2024",
    updatedAt: "16/04/2024",
    code: {
      exampleCode: UTILITIES_CODE.copyTextToClipboardCode,
      languageName: "React",
      titleFile: "copyTextToClipboard.ts",
    },
  },
  {
    id: uuidv4(),
    title: "Use local storage",
    description:
      'Este hook, useLocalStorage, oferece uma maneira simples de armazenar e recuperar valores no armazenamento local do navegador em aplicações React. Ele retorna o valor armazenado e uma função para atualizá-lo, mantendo os dados persistentes entre as sessões do usuário.',
    createdAt: "12/02/2024",
    updatedAt: "16/04/2024",
    code: {
      exampleCode: UTILITIES_CODE.useLocalStorageCode,
      languageName: "React",
      titleFile: "useLocalStorage.ts",
    },
  },
  {
    id: uuidv4(),
    title: "Use debounce",
    description:
      'Este hook, useDebounce, permite adiar a atualização de um valor em um intervalo de tempo especificado. Ele é útil para atrasar a execução de operações, como atualizações de estado em resposta a mudanças rápidas de entrada do usuário, reduzindo assim a frequência de atualizações e melhorando o desempenho da aplicação React.',
    createdAt: "12/02/2024",
    updatedAt: "16/04/2024",
    code: {
      exampleCode: UTILITIES_CODE.useDebounceCode,
      languageName: "React",
      titleFile: "useDebounce.ts",
    },
  },
  {
    id: uuidv4(),
    title: "Use previous",
    description:
      'Este hook, usePrevious, mantém uma referência ao valor anterior de uma variável de entrada. Ele é útil para comparar o estado anterior com o estado atual em componentes React, permitindo a execução de ações condicionais com base em mudanças de estado.',
    createdAt: "12/02/2024",
    updatedAt: "16/04/2024",
    code: {
      exampleCode: UTILITIES_CODE.usePreviousCode,
      languageName: "React",
      titleFile: "usePrevious.ts",
    },
  },
  {
    id: uuidv4(),
    title: "Use toggle",
    description:
      'Este hook, useToggle, proporciona uma maneira simples de alternar entre dois estados booleanos em componentes React. Ele retorna o estado atual e uma função para alternar esse estado entre true e false. Essa funcionalidade é útil para criar interruptores, botões de alternância e outros elementos de interface de usuário que alteram seu estado com um clique ou interação do usuário.',
    createdAt: "12/02/2024",
    updatedAt: "16/04/2024",
    code: {
      exampleCode: UTILITIES_CODE.useToggle,
      languageName: "React",
      titleFile: "useToggle.ts",
    },
  },
  {
    id: uuidv4(),
    title: "Use pagination",
    description:
      'Este hook, usePagination, é utilizado para gerenciar a paginação em componentes React. Ele mantém o controle do estado da página atual e fornece métodos para navegar entre as páginas, incluindo ir para uma página específica, ir para a próxima página e ir para a página anterior. Essa funcionalidade é útil para implementar sistemas de paginação em listas ou tabelas que exibem grandes conjuntos de dados, facilitando a navegação do usuário por diferentes páginas de conteúdo.',
    createdAt: "12/02/2024",
    updatedAt: "16/04/2024",
    code: {
      exampleCode: UTILITIES_CODE.usePagination,
      languageName: "React",
      titleFile: "usePagination.ts",
    },
  },
];
