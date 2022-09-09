import { Box } from '../../constants/Box';
import { FeedbackButtom } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Box as="ul" display="flex" justifyContent="center" alignItems="center">
      {options.map(option => (
        <Box as="li" mr={3} key={option}>
          <FeedbackButtom type="button" onClick={() => onLeaveFeedback(option)}>
            {option[0].toUpperCase() + option.slice(1)}
          </FeedbackButtom>
        </Box>
      ))}
    </Box>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
