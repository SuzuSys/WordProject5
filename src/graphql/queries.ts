/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getWord = /* GraphQL */ `
  query GetWord($id: ID!) {
    getWord(id: $id) {
      id
      front
      back
      point
      createdAt
      updatedAt
      setWordsId
      owner
    }
  }
`;
export const listWords = /* GraphQL */ `
  query ListWords(
    $filter: ModelWordFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWords(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        front
        back
        point
        createdAt
        updatedAt
        setWordsId
        owner
      }
      nextToken
    }
  }
`;
export const getSet = /* GraphQL */ `
  query GetSet($id: ID!) {
    getSet(id: $id) {
      id
      name
      description
      words {
        items {
          id
          front
          back
          point
          createdAt
          updatedAt
          setWordsId
          owner
        }
        nextToken
      }
      average
      alpha
      front_language
      back_language
      createdAt
      updatedAt
      folderSetsId
      owner
    }
  }
`;
export const listSets = /* GraphQL */ `
  query ListSets(
    $filter: ModelSetFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSets(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        words {
          nextToken
        }
        average
        alpha
        front_language
        back_language
        createdAt
        updatedAt
        folderSetsId
        owner
      }
      nextToken
    }
  }
`;
export const getFolder = /* GraphQL */ `
  query GetFolder($id: ID!) {
    getFolder(id: $id) {
      id
      name
      description
      sets {
        items {
          id
          name
          description
          average
          alpha
          front_language
          back_language
          createdAt
          updatedAt
          folderSetsId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listFolders = /* GraphQL */ `
  query ListFolders(
    $filter: ModelFolderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFolders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        sets {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
