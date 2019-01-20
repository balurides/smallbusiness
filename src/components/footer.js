import React, { Component  } from 'react';
import './../../style/footer.css';

export default class Footer extends Component {
    render() {
        return(
                <div className="footer" > 
                    <ul>
                        <li> 
                            <h4> about morning person </h4>
                            <div>test 1</div>
                            <div>test 1</div>
                            <div>test 1</div>
                        </li>
                        <li> 
                            <h4> what more  </h4>
                            <div>test 1</div>
                            <div>test 1</div>
                            <div>test 1</div>
                        </li>
                        <li> 
                                <div styles="top:20%">
                                    <i className="support-images"> </i> 
                                </div>
                                <br/>
                                <h4> Talk to us  </h4>
                                <div>test 1</div>
                                <div>test 1</div>
                                <div>test 1</div>
                        </li>
                    </ul>
                </div>
           

        );
    }
}