import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Topbar from '../../components/topbar';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
});

const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'BRL',
    label: 'R$',
  },
];

class TextFields extends React.Component {
  state = {
    name: 'Cliente',
    age: '',
    multiline: 'Controlled',
    currency: 'BRL',
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <Topbar />
        <form className={classes.container} noValidate autoComplete="off">
          <TextField
            id="standard-name"
            label="Nome"
            className={classes.textField}
            value={this.state.name}
            onChange={this.handleChange('name')}
            margin="normal"
          />

          <TextField
            id="standard-uncontrolled"
            label="Aparelho"
            defaultValue=""
            className={classes.textField}
            margin="normal"
          />

          <TextField
            id="standard-full-width"
            label="Serviço"
            style={{ margin: 8 }}
            placeholder="Descrição do Serviço"
            helperText="Full width!"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
          />

          <TextField
            id="standard-select-currency"
            select
            label="Select"
            className={classes.textField}
            value={this.state.currency}
            onChange={this.handleChange('currency')}
            SelectProps={{
              MenuProps: {
                className: classes.menu,
              },
            }}
            helperText="Please select your currency"
            margin="normal"
          >
            {currencies.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="standard-select-currency-native"
            select
            label="Native select"
            className={classes.textField}
            value={this.state.currency}
            onChange={this.handleChange('currency')}
            SelectProps={{
              native: true,
              MenuProps: {
                className: classes.menu,
              },
            }}
            helperText="Please select your currency"
            margin="normal"
          >
            {currencies.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>
        </form>
      </React.Fragment>
    );
  }
}

TextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextFields);
