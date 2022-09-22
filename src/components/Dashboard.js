import { connect } from "react-redux";
import Question from './Question';
import { useState } from "react";

const Dashboard = (props) => {
    const [tab, setTab] = useState('unanswered');

    const handleTabSwitch = (e) => {
        e.preventDefault();
        const newTab = tab === 'answered' ? 'unanswered' : 'answered';
        setTab(newTab);
    }

    return (
        <div>
            <div className="tabs-container">
                <h1>
                    {
                        tab === 'answered' ? 'Answered Questions' : 'Unanswered Questions'
                    }
                </h1>
                <button
                    className="nav-link mt-5"
                    onClick={(e) => handleTabSwitch(e)}
                >
                    {
                        tab === 'answered' ? 'Show Unanswered Questions' : 'Show Answered Questions'
                    }
                </button>
            </div>
            <ul className="dashboard-list">
                {
                    props.questionIds.map((id) => (
                        <Question key={id} id={id} currentTab={tab} />
                    ))
                }
            </ul>
        </div>
    )
}

const mapStateToProps = ({ questions }) => ({
    questionIds: Object.keys(questions).sort(
        (a, b) => questions[b].timestamp - questions[a].timestamp
    ),
});

export default connect(mapStateToProps)(Dashboard);