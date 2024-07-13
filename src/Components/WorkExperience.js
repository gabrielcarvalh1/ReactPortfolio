import PropTypes from 'prop-types'
import styles from './WorkExperience.module.css'

function WorkExperience({companyName, positionTitle, employmentData}){
    return (
     <div className={styles.divContent}>
        <h2>Work Experience</h2>
        <p>Company Name: {companyName}</p>
        <p>Position Title: {positionTitle}</p>
        <p>Employment Dates: {employmentData}</p>
     </div>
    )
}

WorkExperience.propTypes = {
    companyName: PropTypes.string,
    positionTitle: PropTypes.string,
    employmentData: PropTypes.string,
}


export default WorkExperience;

