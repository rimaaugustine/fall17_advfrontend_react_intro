import Footer from "../components/footer2"
import Head from "next/head"
// Material UI theme
import lightBaseTheme from "material-ui/styles/baseThemes/lightBaseTheme"
import getMuiTheme from "material-ui/styles/getMuiTheme"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import { Tabs, Tab } from 'material-ui/Tabs';
// Material UI components
import AppBar from "material-ui/AppBar"
import Paper from "material-ui/Paper"
import FlatButton from 'material-ui/FlatButton';
import {GridList, GridTile} from 'material-ui/GridList';
//import injectTapEventPlugin from 'react-tap-event-plugin';



const styles = {
    headline: {
        fontSize: 20,
        paddingTop: 16,
        marginBottom: 12,
        fontWeight: 400,
        
    },
};

const styles2 = {
    div:{
      display: 'flex',
      width: '100%',
    },
    paperLeft:{
      flex: 1,
      height: '100%',
      margin: 10,
      padding: 10
    },
    paperRight:{
      height: '100%',
      flex: 1,
      margin: 10,
      padding: 10
    }
  };
  

const Page11 = () => (
    <div>
        <Head>
            <title>ReDI: Advanced Frontend</title>
            <link rel="stylesheet" href="static/style.css" />
            <meta name="description" content="Let's make the web great again" />
            <meta name="keywords" content="sample, react, demo, awesome" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta charSet="utf-8" />
        </Head>
        <div>
            <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
                <div>
                    <AppBar
                        title="ReDI: Advanced Frontend"
                        iconClassNameRight="muidocs-icon-navigation-expand-more" 
                        zDepth={0}
                    />
                    <Tabs>
                        <Tab label="COURSE" >
                            <div className="flex-grid">
                            <div  style={styles2.div} >
                            <Paper style={{ padding: 10, margin: 10}} style={styles2.paperLeft}>
                                <img src="static/redi.jpg"  alt="Avatar"  />
                                <h1>Advanced Frontend web development (Javascript) + React </h1>
                                <p>Create and deploy a simple web application using Javascript </p>                  
                            </Paper>
                            
                            <Paper style={{ padding: 10, margin: 10 }} style={styles2.paperRight}>
                            <h4>When</h4>
                                <p>Monday and Thursday 19.00-21.00</p>
                                <p>+TeachTalk: Wednesday 19.00-21.00</p>
                                <h4>Where</h4>
                                <p>Digitales Lernzentrum, Kemperplatz 1a, 7th floor, 10785, Berlin</p>
                                <img src="static/maps.png"  alt="Avatar" />
                                <div>
                                <FlatButton label="Open Google Maps" primary={true} />
                                </div>
                            </Paper>
                            </div>
                            </div>
                            <Paper style={{ padding: 10, margin: 10}} >
                            <p>After this course, you will be able to:</p>
                                <ol>
                                    <li>
                                        Apply intermediate skills in front end web development
                            </li>
                                    <li>
                                        Create a simple web application and deploy it
                            </li>
                                    <li>
                                        Understand foundational programming principles in Javascript
                            </li>
                                    <li>
                                        Use the front end development library React
                            </li>
                                </ol>
                                <p>Entry requirements: Basic Frontend Web development course or equivalent skills in JS</p>
                            </Paper>
                           
                        </Tab>
                        <Tab label="HOMEWORK" >
                            <div>
                                <h2 style={styles.headline}>Tab Two</h2>
                                <p>
                                    This is another example tab.
                                </p>
                            </div>
                        </Tab>
                        <Tab label="CALENDER" >
                            <div>
                                <h2 style={styles.headline}>Tab Two</h2>
                                <p>
                                    This is another example tab.
                                </p>
                            </div>
                        </Tab>
                    </Tabs>

                </div>
            </MuiThemeProvider>
        </div>
    </div>
)
//injectTapEventPlugin();
export default Page11
