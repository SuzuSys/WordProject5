/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const searchWords = /* GraphQL */ `
  query SearchWords(
    $filter: SearchableWordFilterInput
    $sort: [SearchableWordSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableWordAggregationInput]
  ) {
    searchWords(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
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
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
            }
          }
        }
      }
    }
  }
`;
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
