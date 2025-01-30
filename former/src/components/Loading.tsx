import React from "react";
import { styled } from "@mui/material/styles";

const Loading = ({ opacity = 0.5, state = false }) => {
  return (
    <LoadingWrapper state={state} opacity={opacity}>
      <LoadingContainer>
        <div className="loading-container">
          <div className="📦"></div>
          <div className="📦"></div>
          <div className="📦"></div>
          <div className="📦"></div>
          <div className="📦"></div>
        </div>
      </LoadingContainer>
    </LoadingWrapper>
  )
}

const loadingState = {
  duration: '1.5s',
  containerSize: '250px',
  boxSize: '33px',
  boxBorderRadius: '15%',
}

const LoadingWrapper = styled('div')<{ state: boolean, opacity: number }>(({ state, opacity }) => ({
  top: 0, left: 0,
  position: 'fixed',
  width: state ? '100vw' : '0px',
  height: state ? '100vh' : '0px',
  display: state ? 'block' : 'none',
  backgroundColor: `rgba(21, 66, 105, ${opacity})`,
  zIndex: 10001,


}))

const LoadingContainer = styled('div')(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',

  '.loading-container': {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: loadingState.containerSize,

    '.📦': {
      position: 'relative',
      display: 'block',
      width: loadingState.boxSize,
      height: loadingState.boxSize,
      transformOrigin: '-50% center',
      borderRadius: loadingState.boxBorderRadius,
    },

    '.📦:after': {
      content: '""',
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: 0, right: 0,
      backgroundColor: 'lightblue',
      borderRadius: loadingState.boxBorderRadius,
      boxShadow: '0px 0px 10px 0px rgba(28, 159, 255, 0.4)',
    },

    '.📦:nth-of-type(1)': {
      display: 'none',
      visibility: 'hidden',
      animation: `slide ${loadingState.duration} ease-in-out infinite alternate`
    },

    '.📦:nth-of-type(1):after': {
      animation: `color-change ${loadingState.duration} ease-in-out infinite alternate`
    },

    '.📦:nth-of-type(2)': {
      animation: `flip-1 ${loadingState.duration} ease-in-out infinite alternate`
    },

    '.📦:nth-of-type(2):after': {
      backgroundColor: '#1c9fff',
      animation: `squidge-1 ${loadingState.duration} ease-in-out infinite alternate`
    },

    '.📦:nth-of-type(3)': {
      animation: `flip-2 ${loadingState.duration} ease-in-out infinite alternate`
    },

    '.📦:nth-of-type(3):after': {
      backgroundColor: '#1fb1fd',
      animation: `squidge-2 ${loadingState.duration} ease-in-out infinite alternate`
    },

    '.📦:nth-of-type(4)': {
      animation: `flip-3 ${loadingState.duration} ease-in-out infinite alternate`
    },

    '.📦:nth-of-type(4):after': {
      backgroundColor: '#22c7fb',
      animation: `squidge-3 ${loadingState.duration} ease-in-out infinite alternate`
    },

    '.📦:nth-of-type(5)': {
      animation: `flip-4 ${loadingState.duration} ease-in-out infinite alternate`
    },

    '.📦:nth-of-type(5):after': {
      backgroundColor: '#23d3fb',
      animation: `squidge-4 ${loadingState.duration} ease-in-out infinite alternate`
    },
  },

  '@keyframes slide': {
    '0%': {
      backgroundColor: '#1795ff',
      transform: 'translatex(0vw)',
    },

    '100%': {
      backgroundColor: '#23d3fb',
      transform: `translatex(calc(${loadingState.containerSize} - ${loadingState.boxSize} * 1.25)))`,
    }
  },

  '@keyframes color-change': {
    '0%': {
      backgroundColor: '#1795ff',
    },

    '100%': {
      backgroundColor: '#23d3fb',
    }
  },

  '@keyframes flip-1': {
    '0%, 15%': {
      transform: 'rotate(0)',
    },

    '35%, 100%': {
      transform: 'rotate(-180deg)',
    }
  },

  '@keyframes squidge-1': {
    '5%': {
      transform: 'scalex(1) scaley(1)',
      transformOrigin: 'center bottom',
    },

    '15%': {
      transform: 'scalex(1.3) scaley(0.7)',
      transformOrigin: 'center bottom',
    },

    '25%, 20%': {
      transform: 'scalex(0.8) scaley(1.4)',
      transformOrigin: 'center bottom',
    },

    '55%, 100%': {
      transform: 'scalex(1) scaley(1)',
      transformOrigin: 'center top',
    },

    '40%': {
      transform: 'scalex(1.3) scaley(0.7)',
      transformOrigin: 'center top',
    }
  },

  '@keyframes flip-2': {
    '0%, 30%': {
      transform: 'rotate(0)',
    },

    '50%, 100%': {
      transform: 'rotate(-180deg)',
    }
  },

  '@keyframes squidge-2': {
    '20%': {
      transform: 'scalex(1) scaley(1)',
      transformOrigin: 'center bottom',
    },

    '30%': {
      transform: 'scalex(1.3) scaley(0.7)',
      transformOrigin: 'center bottom',
    },

    '40%, 35%': {
      transform: 'scalex(0.8) scaley(1.4)',
      transformOrigin: 'center bottom',
    },

    '70%, 100%': {
      transform: 'scalex(1) scaley(1)',
      transformOrigin: 'center top',
    },

    '55%': {
      transform: 'scalex(1.3) scaley(0.7)',
      transformOrigin: 'center top',
    }
  },

  '@keyframes flip-3': {
    '0%, 45%': {
      transform: 'rotate(0)',
    },

    '65%, 100%': {
      transform: 'rotate(-180deg)',
    }
  },

  '@keyframes squidge-3': {
    '35%': {
      transform: 'scalex(1) scaley(1)',
      transformOrigin: 'center bottom',
    },

    '45%': {
      transform: 'scalex(1.3) scaley(0.7)',
      transformOrigin: 'center bottom',
    },

    '55%, 50%': {
      transform: 'scalex(0.8) scaley(1.4)',
      transformOrigin: 'center bottom',
    },

    '85%, 100%': {
      transform: 'scalex(1) scaley(1)',
      transformOrigin: 'center top',
    },

    '70%': {
      transform: 'scalex(1.3) scaley(0.7)',
      transformOrigin: 'center top',
    }
  },

  '@keyframes flip-4': {
    '0%, 60%': {
      transform: 'rotate(0)',
    },

    '80%, 100%': {
      transform: 'rotate(-180deg)',
    }
  },

  '@keyframes squidge-4': {
    '50%': {
      transform: 'scalex(1) scaley(1)',
      transformOrigin: 'center bottom',
    },

    '60%': {
      transform: 'scalex(1.3) scaley(0.7)',
      transformOrigin: 'center bottom',
    },

    '70%, 65%': {
      transform: 'scalex(0.8) scaley(1.4)',
      transformOrigin: 'center bottom',
    },

    '100%, 100%': {
      transform: 'scalex(1) scaley(1)',
      transformOrigin: 'center top',
    },

    '85%': {
      transform: 'scalex(1.3) scaley(0.7)',
      transformOrigin: 'center top',
    }
  },
}))

export { Loading }