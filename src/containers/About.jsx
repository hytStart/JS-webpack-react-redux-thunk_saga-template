import React, { useEffect, Suspense } from 'react'
import { connect } from 'react-redux'
import { createSelector } from 'reselect'
import { setName, getData, testSaga } from '../actions/about'
import style from './style.less'
const DiyButton = React.lazy(() => import('../components/common/testButton'))

const About = (props) => {
  const { name } = props.data
  useEffect(() => {
    console.log('props', props)
    setTimeout(async () => {
      props.setName('woshinibaba')
      props.testSaga()
      // await props.getData({});
      console.log('await end')
    }, 3000)
  }, [])
  return (
    <div className={style['helo']}>
      About {name}
      <Suspense fallback={<div>Loading...</div>}>
        <DiyButton />
      </Suspense>
    </div>
  )
}

const mapStateToProps = createSelector(
  (state) => {
    return {
      data: state.about,
    }
  },
  (data) => data,
)

// function mapDispatchToProps(dispatch) {
//   return {
//     setName: (name) => dispatch(setName(name)),
//     dispatch,
//   };
// }

const mapDispatchToProps = {
  setName,
  getData,
  testSaga,
}

export default connect(mapStateToProps, mapDispatchToProps)(About)
