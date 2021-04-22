  import React from 'react';
  import Select from 'react-select';
  import './dropdown.css'

const options = [
  { value: 'HTML', label: 'HTML', info: 'Hyper Text Markup Language (HTML) is a markup language[1] for creating a webpage. In easier words, HTML is a kind of programming language that can make a new webpage. Webpages are usually viewed in a web browser. They can include writing, links, pictures, and even sound and video. HTML is used to mark and describe each of these kinds of content so the web browser can display them correctly. HTML also adds meta information to a webpage. Meta information is usually not shown by web browsers and is data about the web page, e.g., the name of the person who created the page. Cascading Style Sheets (CSS) is used to style HTML elements while JavaScript is used for website behavior and also changing the HTML and CSS. HTML also adds meta information to a webpage. Meta information is usually not shown by web browsers and is data about the web page, e.g., the name of the person who created the page. Cascading Style Sheets (CSS) is used to style HTML elements while JavaScript is used for website behavior and also changing the HTML and CSS.' },
  { value: 'REACTJS', label: 'REACTJS', info: 'React (also known as React.js or ReactJS) is an open-source, front end, JavaScript library[3] for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies.[4][5][6] React can be used as a base in the development of single-page or mobile applications. However, React is only concerned with state management and rendering that state to the DOM, so creating React applications usually requires the use of additional libraries for routing, as well as certain client-side functionality.[7] It is maintained by Facebook and a community of individual developers and companies.[4][5][6] React can be used as a base in the development of single-page or mobile applications. However, React is only concerned with state management and rendering that state to the DOM, so creating React applications usually requires the use of additional libraries for routing, as well as certain client-side functionality.' },
  { value: 'NODEJS', label: 'NODEJS', info: 'Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser. Node.js lets developers use JavaScript to write command line tools and for server-side scripting—running scripts server-side to produce dynamic web page content before the page is sent to the users web browser. Consequently, Node.js represents a "JavaScript everywhere" paradigm,[6] unifying web-application development around a single programming language, rather than different languages for server-side and client-side scripts. Consequently, Node.js represents a "JavaScript everywhere" paradigm,[6] unifying web-application development around a single programming language, rather than different languages for server-side and client-side scripts.' },
  { value: 'CSS', label: 'CSS', info: 'CSS is designed to enable the separation of presentation and content, including layout, colors, and fonts.[3] This separation can improve content accessibility, provide more flexibility and control in the specification of presentation characteristics, enable multiple web pages to share formatting by specifying the relevant CSS in a separate .css file which reduces complexity and repetition in the structural content as well as enabling the .css file to be cached to improve the page load speed between the pages that share the file and its formatting.This separation can improve content accessibility, provide more flexibility and control in the specification of presentation characteristics, enable multiple web pages to share formatting by specifying the relevant CSS in a separate .css file which reduces complexity and repetition in the structural content as well as enabling the .css file to be cached to improve the page load ' },

];
 
class Home extends React.Component {
  state = {
    selectedOption: null,
  };
  handleChange = selectedOption => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  };

  select = selectedOption => {
    this.setState({ selectedOption });
    console.log(`Option clicked`,selectedOption);
   // return selectedOption;

  }
  render() {
    const { selectedOption } = this.state;

    return (
      <div className="dropdown">
      <Select
      className="dropdown-basic"
      value={selectedOption}
      onChange={this.handleChange}
      options={options}
    /> 

    <div className="information">
      <h1 className="info">Information</h1>
      {this.state.selectedOption && this.state.selectedOption.info}
    </div>

      
    </div>
  );
}
}


 export default Home;

