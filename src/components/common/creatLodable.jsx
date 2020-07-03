import React from 'react'
import Loadable from 'react-loadable';

const MyLoadingComponent = (props) => {
  if (props.pastDelay) {
    return <div>Loading...</div>;
  }
  return null
}

const CreatLodable = loader => Loadable({
  loader,
  loading: MyLoadingComponent,
  delay: 300,
})

export default CreatLodable