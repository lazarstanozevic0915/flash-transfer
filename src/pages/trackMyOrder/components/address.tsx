import React, { useState } from 'react';
import { Stack, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import TelegramIcon from '@mui/icons-material/Telegram';
import { DownloadOutlined } from '@ant-design/icons';

const Address = () => {
  const [selectedOption, setSelectedOption] = useState<'send' | 'receive'>('send');

  const handleOptionChange = (option: 'send' | 'receive') => {
    setSelectedOption(option);
  };

  return (
    <HeroWrapper>
      <AddressContainer>
        <FormContainer>
          <RadioButtonContainer>
            <RadioButton
              active={selectedOption === 'send'}
              onClick={() => handleOptionChange('send')}
            >
              <RadioButtonText active={selectedOption === 'send'}>
                <TelegramIcon className='!text-xl' />
                Send
              </RadioButtonText>
            </RadioButton>
            <RadioButton
              active={selectedOption === 'receive'}
              onClick={() => handleOptionChange('receive')}
            >
              <RadioButtonText active={selectedOption === 'receive'}>
                <DownloadOutlined className='!text-xl' />
                Receive
              </RadioButtonText>
            </RadioButton>
          </RadioButtonContainer>
          <FormItem>
            <label className='text-sm text-start text-[#374151]' htmlFor='fullName'>
              Enter Tracking Number
            </label>
            <AddressInput
              id='fullName'
              placeholder='Flash Tracking Number (FTN)'
              className='!text-[#000]'
            />
            <SubmitButton variant='contained' fullWidth>
              Continue
            </SubmitButton>
          </FormItem>
        </FormContainer>
      </AddressContainer>
    </HeroWrapper>
  );
};

const HeroWrapper = styled(Stack)(({ theme }) => ({
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  padding: theme.spacing(4),

  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(0.5),
  },
}));

const AddressInput = styled('input')(({ theme }) => ({
  padding: theme.spacing(1.5),
  border: `1px solid ${theme.palette.grey[300]}`,
  borderRadius: theme.spacing(1),
  width: '100%',
  '&::placeholder': {
    color: theme.palette.grey[500],
  },
}));

const AddressContainer = styled(Stack)(({ theme }) => ({
  width: '100%',
  maxWidth: 600,
  padding: theme.spacing(4),
  borderRadius: theme.spacing(2),
  backgroundColor: theme.palette.common.white,
  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
  textAlign: 'center',
  gap: theme.spacing(2),
}));

const FormContainer = styled(Stack)(({ theme }) => ({
  gap: theme.spacing(2),
  marginTop: theme.spacing(2),
}));

const FormItem = styled(Stack)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
}));

const SubmitButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#FFC107',
  color: '#FFFFFF',
  fontWeight: 600,
  padding: theme.spacing(1.5),
  borderRadius: theme.spacing(1),
  textTransform: 'none',
  '&:hover': {
    backgroundColor: '#FFB300',
  },
}));

const RadioButtonContainer = styled(Stack)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: theme.palette.grey[100],
  padding: theme.spacing(1),
  borderRadius: theme.spacing(1),
}));

const RadioButton = styled(Button)(({ theme, active }: { theme?: any; active: boolean }) => ({
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: theme.spacing(1),
  padding: theme.spacing(1.5),
  backgroundColor: active ? '#FFC107' : theme.palette.grey[100],
  borderRadius: theme.spacing(1),
  boxShadow: active ? '0px 4px 6px rgba(0, 0, 0, 0.1)' : 'none',
  textTransform: 'none',
  '&:hover': {
    backgroundColor: active ? '#FFB300' : theme.palette.grey[200],
  },
}));

const RadioButtonText = styled('span')<{ active: boolean }>(({ theme, active }) => ({
  color: active ? '#181F30' : '#6E757D', // Black for active, #ddd for inactive
  fontWeight: active ? 600 : 400,
  display: 'flex',
  flexDirection: 'row',
  gap: theme.spacing(1),
  alignItems: 'center',
}));

export default Address;
