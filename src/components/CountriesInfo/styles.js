import { StyleSheet } from 'aphrodite'

export default StyleSheet.create({
  image: {
    width: '300px',
    height: 'auto',
  },
  grid: {
    width: '100%',
  },
  info: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: 'calc(100% - 300px)'
  },
})