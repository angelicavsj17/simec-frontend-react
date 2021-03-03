import React from 'react'
import HomeFirstFrame from '../../components/home/firstframe'
import HomeFourthFrame from '../../components/home/fourthframe'
import HomeSecondFrame from '../../components/home/secondframe'
import HomeThirdFrame from '../../components/home/thirdsframe'
import HomeZeroFrame from '../../components/home/zeroframe'
let Home = () => {
    return (
        <>
            {/* <HomeFirstFrame /> */}
            <HomeZeroFrame />
            <HomeSecondFrame />
            <HomeThirdFrame />
            <HomeFourthFrame />
        </>
    )
}
export default Home;