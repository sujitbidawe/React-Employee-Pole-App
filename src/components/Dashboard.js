import { connect } from "react-redux";
import Question from './Question';

const Dashboard = (props) => {
    console.log("props: ", props);
    return (
        <div>
            <h3 className="center">Dashboard</h3>
            <ul className="dashboard-ist">
                {
                    props.questionIds.map((id) => (
                        <li key={id}>
                            <Question id={id} />
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