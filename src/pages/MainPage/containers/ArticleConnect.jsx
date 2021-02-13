import { connect } from 'react-redux';
import Article from '../components/Article';
export default connect(
    function (state) {
        var title,desc,explain;
        if(state.mode === 'WELCOME'){
            title = state.welcome_content.title;
            desc = state.welcome_content.desc;
            explain = state.welcome_content.explain;
        } else {
            for(var i=0; i<state.contents.length;i++){
                var d = state.contents[i];
                if(d.id === state.selected_content_id) {
                    title = d.title;
                    desc = d.desc;
                    explain = d.explain;
                    break;
                }
            }
        } 
        return {
            title:title,
            desc:desc,
            explain:explain
        }
    }
)(Article);