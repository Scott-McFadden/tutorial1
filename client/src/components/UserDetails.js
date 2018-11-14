import React, {Component} from 'react';
import {connect} from 'react-redux';


class UserDetails extends Component {

    render()
    {
        if (this.props.auth == null ||  this.props.auth.user === 'none')
            return <p>No User has been identified</p>;
        let tableString = ' <table><tbody>';
        const entries = Object.entries(this.props.auth);
        console.log(entries);
        if (entries)
            for (let a=0; a< entries.length; a++ )
                tableString = tableString +
                    '<tr><td> ' + entries[a][0] + ' </td><td> ' + entries[a][1]  + '</td></tr>';
        tableString = tableString + "</tbody></table>";




        return ( <div dangerouslySetInnerHTML={createMarkup(tableString)} />);



    }



}

function createMarkup(text) {
    return {__html: text};
}




function mapStateToProps({auth}) {
    return {auth  };
}
export default connect(mapStateToProps)(UserDetails);
