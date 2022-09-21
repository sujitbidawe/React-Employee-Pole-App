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
                <button
                    className="tab-nav"
                    onClick={(e) => handleTabSwitch(e)}
                >
                    {
                        tab === 'answered' ? 'Show Answered Questions' : 'Show Unanswered Questions'
                    }
                </button>
            </div>
            <ul className="dashboard-ist">
                {
                    props.questionIds.map((id) => (
                        <li key={id}>
                            <Question id={id} currentTab={tab} />
                        </li>
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