import PropTypes from 'prop-types'
import styles from './WorkExperience.module.css'

function WorkExperience({companyName, positionTitle, employmentData, salary}){
    return (
     <div className={styles.divContent}>
        <h5>Work Experience</h5>
        <p>Company Name: {companyName}</p>
        <p>Position Title: {positionTitle}</p>
        <p>Employment Dates: {employmentData}</p>
        <p>Salary: {salary}</p>
     </div>
    )
}

WorkExperience.propTypes = {
    companyName: PropTypes.string,
    positionTitle: PropTypes.string,
    employmentData: PropTypes.string,
    salary: PropTypes.number
}


export default WorkExperience;

