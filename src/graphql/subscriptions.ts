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
      limit
      average
      calculated_average
      alpha
      front_language
      back_language
      searchable_minimum
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
      limit
      average
      calculated_average
      alpha
      front_language
      back_language
      searchable_minimum
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
      limit
      average
      calculated_average
      alpha
      front_language
      back_language
      searchable_minimum
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
          limit
          average
          calculated_average
          alpha
          front_language
          back_language
          searchable_minimum
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
          limit
          average
          calculated_average
          alpha
          front_language
          back_language
          searchable_minimum
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
          limit
          average
          calculated_average
          alpha
          front_language
          back_language
          searchable_minimum
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
export const onCreateSchemaTest2 = /* GraphQL */ `
  subscription OnCreateSchemaTest2($owner: String) {
    onCreateSchemaTest2(owner: $owner) {
      id
      name
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateSchemaTest2 = /* GraphQL */ `
  subscription OnUpdateSchemaTest2($owner: String) {
    onUpdateSchemaTest2(owner: $owner) {
      id
      name
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteSchemaTest2 = /* GraphQL */ `
  subscription OnDeleteSchemaTest2($owner: String) {
    onDeleteSchemaTest2(owner: $owner) {
      id
      name
      createdAt
      updatedAt
      owner
    }
  }
`;
