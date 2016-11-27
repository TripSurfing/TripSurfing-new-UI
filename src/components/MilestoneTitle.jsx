import React from 'react';
import Autosuggest from 'react-autosuggest';
import $ from 'jquery';
// Imagine you have a list of languages that you'd like to autosuggest.
let predictions = [];


// Teach Autosuggest how to calculate suggestions for any given input value.
const getSuggestions=value => {
  return predictions;
};

// When suggestion is clicked, Autosuggest needs to populate the input element
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
const getSuggestionValue=suggestion => suggestion.description;

// Use your imagination to render suggestions.
const renderSuggestion=suggestion => (
  <div>
    {suggestion.description}
  </div>
);

const renderInputComponent=inputProps => {
  return (
  <div>
    <input {...inputProps} />
    <div>custom stuff</div>
  </div>
);}

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    // Autosuggest is a controlled component.
    // This means that you need to provide an input value
    // and an onChange handler that updates this value (see below).
    // Suggestions also need to be provided to the Autosuggest,
    // and they are initially empty because the Autosuggest is closed.
    this.state={
      value: this.props.currentTitle,
      suggestions: []
    };
  }
  static defaultProps={
    apiKey: "AIzaSyDC1yaq7qAhcImYiMWTekEORRuojkH-rdY"
  }
  
  onChange=(event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };

  onBlur=(event, {focusFirstSuggestion}) => {
    let title=$('#title-input-'+this.props.milestoneId).val().trim();
    this.props.changeMilestoneTitle(this.props.milestoneId, title)
  }
  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested=({ value }) => {
    // cho nha anh Phong
    // const apiKey="AIzaSyD_zWZpgF_sB-NW3sNAlW8fVhFKpXoO7N0";
    // cho localhost:8080
    let {apiKey}=this.props;
    let url='https://maps.googleapis.com/maps/api/place/autocomplete/json?input='+value+'&key='+apiKey;
    $.ajax({
      type: "get",
      url: url,
      dataType: "json",
    }).done(res => {
      this.setState({
        suggestions: res.predictions
      })
    });
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested=() => {
    this.setState({
      suggestions: []
    });
  };

  onSuggestionSelected=(event, { suggestion, suggestionValue, sectionIndex, method }) => {
    // console.log(suggestion, suggestionValue, sectionIndex, method);
    let {apiKey}=this.props;
    let url=`https://maps.googleapis.com/maps/api/place/details/json?placeid=${suggestion.place_id}&key=${apiKey}`;
    let placeInfo={
      placeName: suggestionValue,
      placeId: suggestion.place_id,
      location: {}
    }
    $.ajax({
      type: "get",
      url: url,
      dataType: "json",
    }).done(res => {
      console.log(res);
      let result = res.result;
      placeInfo.location= result.geometry.location;
      placeInfo.address = result.formatted_address;
    });
    this.props.changeMilestonePlaceInfo(this.props.milestoneId, placeInfo)
  }
  
  render() {
    const { value, suggestions }=this.state;

    // Autosuggest will pass through all these props to the input element.
    const inputProps={
      placeholder: 'Your next destination',
      value,
      onChange: this.onChange,
      onBlur: this.onBlur,
      id: "title-input-" + this.props.milestoneId
    };

    // Finally, render it!
    return (
      <Autosuggest
        ref={r => this.autoRef= r}
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
        focusFirstSuggestion={true}
        onSuggestionSelected={this.onSuggestionSelected}
      />
    );
  }
}