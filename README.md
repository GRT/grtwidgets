# grtwidgets
a set of UI widgets



## Install
```bash
npm i --save grtwidgets 
```

## widgets
- `MultipleChoice` - a multiple choice question tool.
- `AppHeader` - Header component for your app.

## Use in your React app

```jsx harmony
import { MultipleChoice } from 'grtwidgets';


render() {
  return (<MultipleChoice
          style={{width:'500px', margin: '20px'}}
          question="Some Question String"
          answers={['Some', 'array', 'of', 'answers']}
          onAnswerSelected={anwserCallback}
          onAnswerSubmit={submitCallback} />);
}

```
