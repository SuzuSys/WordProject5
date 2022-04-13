/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createWord = /* GraphQL */ `
  mutation CreateWord(
    $input: CreateWordInput!
    $condition: ModelWordConditionInput
  ) {
    createWord(input: $input, condition: $condition) {
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
export const updateWord = /* GraphQL */ `
  mutation UpdateWord(
    $input: UpdateWordInput!
    $condition: ModelWordConditionInput
  ) {
    updateWord(input: $input, condition: $condition) {
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
export const deleteWord = /* GraphQL */ `
  mutation DeleteWord(
    $input: DeleteWordInput!
    $condition: ModelWordConditionInput
  ) {
    deleteWord(input: $input, condition: $condition) {
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
export const createSet = /* GraphQL */ `
  mutation CreateSet(
    $input: CreateSetInput!
    $condition: ModelSetConditionInput
  ) {
    createSet(input: $input, condition: $condition) {
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
export const updateSet = /* GraphQL */ `
  mutation UpdateSet(
    $input: UpdateSetInput!
    $condition: ModelSetConditionInput
  ) {
    updateSet(input: $input, condition: $condition) {
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
export const deleteSet = /* GraphQL */ `
  mutation DeleteSet(
    $input: DeleteSetInput!
    $condition: ModelSetConditionInput
  ) {
    deleteSet(input: $input, condition: $condition) {
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
export const createFolder = /* GraphQL */ `
  mutation CreateFolder(
    $input: CreateFolderInput!
    $condition: ModelFolderConditionInput
  ) {
    createFolder(input: $input, condition: $condition) {
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
export const updateFolder = /* GraphQL */ `
  mutation UpdateFolder(
    $input: UpdateFolderInput!
    $condition: ModelFolderConditionInput
  ) {
    updateFolder(input: $input, condition: $condition) {
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
export const deleteFolder = /* GraphQL */ `
  mutation DeleteFolder(
    $input: DeleteFolderInput!
    $condition: ModelFolderConditionInput
  ) {
    deleteFolder(input: $input, condition: $condition) {
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
