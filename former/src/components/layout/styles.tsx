import { styled } from "@mui/material/styles";
import { Stack } from "@mui/material";

const ScrollWrapper = ({ className, children, ...props }: any) => {
  return (
    <ScrollContainer>
      <Stack className={`scrollContainer ${className}`} {...props}>
        {children}
      </Stack>
    </ScrollContainer>
  )
}

const GlobalSpacing = styled('div')(({ theme }) => ({
  padding: '0px max(80px, calc((100vw - 1500px)/2))',

  [theme.breakpoints.down('xl2')]: {
    padding: '0px 80px',
  },

  [theme.breakpoints.down('lg')]: {
    padding: '0px 60px',
  },

  [theme.breakpoints.down('md')]: {
    padding: '0px 40px',
  },

  [theme.breakpoints.down('sm')]: {
    padding: '0px 20px',
  }
}))

const ScrollContainer = styled('div')({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',

  '.scrollContainer': {
    width: '100%',
    height: '100%',
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    overflowX: 'hidden',
    overflowY: 'auto',
  },
})

export { GlobalSpacing, ScrollWrapper }