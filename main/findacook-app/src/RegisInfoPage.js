import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import BackButton from './components/BackButton';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Autocomplete from '@mui/material/Autocomplete';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import parse from 'autosuggest-highlight/parse';
import { debounce } from '@mui/material/utils';
import "./index.css";

const GOOGLE_MAPS_API_KEY = 'API';


function loadScript(src, position, id) {
  if (!position) {
    return;
  }

  const script = document.createElement('script');
  script.setAttribute('async', '');
  script.setAttribute('id', id);
  script.src = src;
  position.appendChild(script);
}

const autocompleteService = { current: null };

function RegisinfoPage() {
  const [value, setValue] = React.useState(null);
  const [inputValue, setInputValue] = React.useState('');
  const [options, setOptions] = React.useState([]);
  const loaded = React.useRef(false);

  if (typeof window !== 'undefined' && !loaded.current) {
    if (!document.querySelector('#google-maps')) {
      loadScript(
        `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&libraries=places`,
        document.querySelector('head'),
        'google-maps',
      );
    }

    loaded.current = true;
  }

  const fetch = React.useMemo(
    () =>
      debounce((request, callback) => {
        autocompleteService.current.getPlacePredictions(request, callback);
      }, 400),
    [],
  );

  React.useEffect(() => {
    let active = true;

    if (!autocompleteService.current && window.google) {
      autocompleteService.current =
        new window.google.maps.places.AutocompleteService();
    }
    if (!autocompleteService.current) {
      return undefined;
    }

    if (inputValue === '') {
      setOptions(value ? [value] : []);
      return undefined;
    }

    fetch({ input: inputValue }, (results) => {
      if (active) {
        let newOptions = [];

        if (value) {
          newOptions = [value];
        }

        if (results) {
          newOptions = [...newOptions, ...results];
        }

        setOptions(newOptions);
      }
    });

    return () => {
      active = false;
    };
  }, [value, inputValue, fetch]);


  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [phnum, setPhnum] = useState('');
  const [addr, setAddr] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Logic for registering
    window.location.href = "/terms";
  };

  return (
    <><BackButton />
    <Link style={{textDecoration: 'none'}} to="/"><img id="loginLogo" alt="FindaCook logo" src="./images/logo-new-edit-01.png"/></Link>
    <form id="regisForm" onSubmit={handleSubmit}>
    <FormControl sx={{ width: '25ch' }}>
          <br />
          <TextField variant="filled" helperText="Please enter your first name" className='formInput' label="First Name" value={fname} onChange={(event) => setFname(event.target.value)}  />
          <br />
          <br />
          <TextField variant="filled" helperText="Please enter your surname" className='formInput' label="Surname" value={lname} onChange={(event) => setLname(event.target.value)} />
          <br />
          <br />
          <TextField variant="filled" helperText="Please enter your phone number" className='formInput' label="Phone Number" type="tel" value={phnum} onChange={(event) => setPhnum(event.target.value)} />
          <br />
          <br />
          {/* <TextField variant="filled" helperText="Please enter your address" className='formInput' label="Address" value={addr} onChange={(event) => setAddr(event.target.value)} /> */}
          <Autocomplete
            className='formInput'
            id='addressfield'
            getOptionLabel={(option) =>
              typeof option === 'string' ? option : option.description
            }
            filterOptions={(x) => x}
            options={options}
            autoComplete
            includeInputInList
            filterSelectedOptions
            value={value}
            noOptionsText="Start typing an address"
            onChange={(event, newValue) => {
              setOptions(newValue ? [newValue, ...options] : options);
              setValue(newValue);
            }}
            onInputChange={(event, newInputValue) => {
              setInputValue(newInputValue);
            }}
            renderInput={(params) => (
              <TextField {...params} label="Address" fullWidth helperText="Please enter your address" />
            )}
            renderOption={(props, option) => {
              const matches =
                option.structured_formatting.main_text_matched_substrings || [];

              const parts = parse(
                option.structured_formatting.main_text,
                matches.map((match) => [match.offset, match.offset + match.length]),
              );

              return (
                <li {...props}>
                  <Grid container alignItems="center">
                    <Grid item sx={{ display: 'flex', width: 44 }}>
                      <LocationOnIcon sx={{ color: 'text.secondary' }} />
                    </Grid>
                    <Grid item sx={{ width: 'calc(100% - 44px)', wordWrap: 'break-word' }}>
                      {parts.map((part, index) => (
                        <Box
                          key={index}
                          component="span"
                          sx={{ fontWeight: part.highlight ? 'bold' : 'regular' }}
                        >
                          {part.text}
                        </Box>
                      ))}

                      <Typography variant="body2" color="text.secondary">
                        {option.structured_formatting.secondary_text}
                      </Typography>
                    </Grid>
                  </Grid>
                </li>
              );
            }}
        />
          <br />
          <br />
          <br/>
            <button type="submit" className='btn' id="regBtn">Next</button>
          <br />
          
    </FormControl>
    </form></>
  );
}

export default RegisinfoPage;