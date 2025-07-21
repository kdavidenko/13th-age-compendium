import React, { useState, useEffect } from 'react';
import {
  TextField,
  Button,
  Chip,
  Stack,
  InputAdornment,
  Autocomplete
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Feat } from 'feats/FeatsPage';


interface FilterSearchProps {
  data: Feat[];
  onFilteredChange: (filtered: Feat[]) => void;
}

// Example filter options — customize or generate dynamically as needed
const filterOptions = [
  'Adventurer',
  'Champion',
  'Epic',
  'Zenith',
  'Kin',
  'Barbarian',
  'Bard',
  'Cleric',
  'Fighter',
  'Paladin',
  'Ranger',
  'Rogue',
  'Sorcerer',
  'Wizard',
  'Universal',
];

const FilterSearch: React.FC<FilterSearchProps> = ({ data, onFilteredChange }) => {
  const [query, setQuery] = useState('');
  const [filters, setFilters] = useState<string[]>([]);

  const addFilter = () => {
    const trimmed = query.trim();
    if (
      trimmed &&
      !filters.includes(trimmed) &&
      filterOptions.includes(trimmed)
    ) {
      setFilters((prev) => [...prev, trimmed]);
      setQuery('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addFilter();
    }
  };

  const removeFilter = (filterToRemove: string) => {
    setFilters((prev) => prev.filter((f) => f !== filterToRemove));
  };

  useEffect(() => {
    const filtered = data.filter((feat) => {
      return filters.every((value) => {
        const val = value.toLowerCase();

        // Check featType includes value
        if (feat.featType.toLowerCase().includes(val)) return true;

        // Check req includes value
        if (feat.req.toLowerCase().includes(val)) return true;

        // Check desc keys — value matches a key AND the corresponding desc[key] is truthy (e.g., non-empty array)
        if (
          Object.entries(feat.desc).some(
            ([key, descVal]) => key.toLowerCase() === val && descVal && descVal.length > 0
          )
        ) return true;

        // No matches
        return false;
      });
    });

    onFilteredChange(filtered);
  }, [filters, data, onFilteredChange]);

  return (
    <div>
      {/* Autocomplete + Add Button */}
      <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
        <Autocomplete
          freeSolo
          options={filterOptions}
          inputValue={query}
          onInputChange={(_, value) => setQuery(value)}
          onKeyDown={handleKeyDown}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Add filter..."
              variant="outlined"
              InputProps={{
                ...params.InputProps,
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          )}
          sx={{ flex: 1 }}
        />
        <Button
          variant="contained"
          onClick={addFilter}
          disabled={!query.trim() || !filterOptions.includes(query.trim())}
        >
          Add Filter
        </Button>
      </Stack>

      {/* Filter Chips */}
      <Stack direction="row" spacing={1} flexWrap="wrap">
        {filters.map((filter) => (
          <Chip
            key={filter}
            label={filter}
            onDelete={() => removeFilter(filter)}
            variant="outlined"
          />
        ))}
      </Stack>
    </div>
  );
};

export default FilterSearch;