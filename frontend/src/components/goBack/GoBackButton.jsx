import React from 'react'

const GoBackButton = ({history, classes}) => {

    return (<>
        <button onClick={()=>history.goBack()} className={classes.goBack}> Вернуться обратно </button>
    
    </>
    )
}

export default GoBackButton
