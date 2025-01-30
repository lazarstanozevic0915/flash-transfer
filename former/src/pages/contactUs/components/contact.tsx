import { Stack, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const Contact = () => {
  return (
    <HeroWrapper>
      <ContactContainer>
        <Typography variant='h4' textAlign={'start'}>
          Get in Touch
        </Typography>
        <Typography variant='body1' textAlign={'start'} color={'#6E757D'}>
          You can reach us anytime
        </Typography>

        <FormContainer>
          <FormItem>
            <label className='text-lg text-start' htmlFor='fullName'>
              Full name
            </label>
            <AddressInput id='fullName' placeholder='Enter your name' className='!text-[#000]' />
          </FormItem>
          <FormItem>
            <label className='text-lg text-start' htmlFor='emailAddress'>
              Email Address
            </label>
            <AddressInput
              id='emailAddress'
              placeholder='Enter your email'
              className='!text-[#000]'
            />
          </FormItem>
          <FormItem>
            <label className='text-lg text-start' htmlFor='phoneNumber'>
              Phone Number
            </label>
            <AddressInput
              id='phoneNumber'
              placeholder='Enter your phone'
              className='!text-[#000]'
            />
          </FormItem>
          <FormItem>
            <label className='text-lg text-start' htmlFor='object'>
              Object
            </label>
            <AddressInput id='object' placeholder='Object' className='!text-[#000]' />
          </FormItem>
          <FormItem>
            <label className='text-lg text-start' htmlFor='fullName'>
              Message
            </label>
            <AddressInputArea
              placeholder='Write your massage'
              id='fullName'
              className='!text-[#000]'
            />
          </FormItem>
          <SubmitButton variant='contained' fullWidth>
            Continue
          </SubmitButton>
        </FormContainer>
      </ContactContainer>
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

const AddressInputArea = styled('textarea')(({ theme }) => ({
  padding: theme.spacing(1.5),
  border: `1px solid ${theme.palette.grey[300]}`,
  borderRadius: theme.spacing(1),
  width: '100%',
  '&::placeholder': {
    color: theme.palette.grey[500],
  },
}));

const ContactContainer = styled(Stack)(({ theme }) => ({
  width: '100%',
  maxWidth: 600,
  padding: theme.spacing(4),
  borderRadius: theme.spacing(2),
  backgroundColor: theme.palette.common.white,
  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
  textAlign: 'center',
  gap: theme.spacing(2),

  '.heading': {
    fontWeight: 600,
    marginBottom: theme.spacing(1),
  },

  '.subheading': {
    color: theme.palette.text.secondary,
    marginBottom: theme.spacing(2),
  },
}));

const FormContainer = styled(Stack)(({ theme }) => ({
  gap: theme.spacing(2),
  marginTop: theme.spacing(2),
  '.input-field': {
    '& .MuiInputBase-root': {
      borderRadius: theme.spacing(1),
    },
  },
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

const FormItem = styled(Stack)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
}));

export default Contact;
