export default {
  buttonArea: {
    width: '100%',
    height: '60px'
  },
  container: {
    position: 'relative',
    fontFamily: 'Arial',
    padding: '15px',
    border: 'thin',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.5)',
    minHeight: '200px',
    minWidth: '400px'
  },
  submit: {
    float: 'right',
    margin: '2px 10px',
    cursor: 'pointer',
    backgroundColor: '#44c767',
    borderRadius: '28px',
    border: '1px solid #18ab29',
    display: 'inline-block',
    color: '#ffffff',
    fontFamily: 'Arial',
    fontSize: '17px',
    padding: '16px 31px',
    textDecoration: 'none',
    boxShadow: '0 2px 2px #2f6627',

    ':hover': {
      backgroundColor: '#5cbf2a'
    },

    ':disabled': {
      cursor: 'default',
      backgroundColor: '#858585'
    },

    ':active': {
      position: 'relative',
      top: '1px',
      backgroundColor: '#5cbf2a',
      boxShadow: '0px 0px 0px #2f6627'
    }
  }
};
