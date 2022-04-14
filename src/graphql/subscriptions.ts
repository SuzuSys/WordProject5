/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateWord = /* GraphQL */ `
  subscription OnCreateWord($owner: String) {
    onCreateWord(owner: $owner) {
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
export const onUpdateWord = /* GraphQL */ `
  subscription OnUpdateWord($owner: String) {
    onUpdateWord(owner: $owner) {
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
export const onDeleteWord = /* GraphQL */ `
  subscription OnDeleteWord($owner: String) {
    onDeleteWord(owner: $owner) {
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
export const onCreateSet = /* GraphQL */ `
  subscription OnCreateSet($owner: String) {
    onCreateSet(owner: $owner) {
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
export const onUpdateSet = /* GraphQL */ `
  subscription OnUpdateSet($owner: String) {
    onUpdateSet(owner: $owner) {
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
export const onDeleteSet = /* GraphQL */ `
  subscription OnDeleteSet($owner: String) {
    onDeleteSet(owner: $owner) {
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
export const onCreateFolder = /* GraphQL */ `
  subscription OnCreateFolder($owner: String) {
    onCreateFolder(owner: $owner) {
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
export const onUpdateFolder = /* GraphQL */ `
  subscription OnUpdateFolder($owner: String) {
    onUpdateFolder(owner: $owner) {
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
export const onDeleteFolder = /* GraphQL */ `
  subscription OnDeleteFolder($owner: String) {
    onDeleteFolder(owner: $owner) {
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
