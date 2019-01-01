import React, { Component  } from 'react';
import './../../style/footer.css';

export default class Footer extends Component {
    render() {
        return(
            <footer>
                <div className="footer" > 
                    <ul>
                        <li> 
                            <div> about morning person </div>
                            <div>test 1</div>
                            <div>test 1</div>
                            <div>test 1</div>
                        </li>
                        <li> 
                            <div> what more  </div>
                            <div>test 1</div>
                            <div>test 1</div>
                            <div>test 1</div>
                        </li>
                        <li> 
                            <i className="support-images"> </i>
                                <h4> Talk to us  </h4>
                                <div>test 1</div>
                                <div>test 1</div>
                                <div>test 1</div>
                        </li>
                    </ul>
                </div>
            </footer>
           

        );
    }
}