import React, { Component } from 'react';
 
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
 
const Ass = (props: any) => {

  console.log(props)
    return (
      <div>
        dsfbsev
      </div>
    );
}
 
const repoQuery = gql`
	query {
    Country {
      name
    }
	}
`
 
const AppWithData = graphql(repoQuery)(Ass)
 
export default AppWithData;