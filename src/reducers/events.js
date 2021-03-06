import _ from 'lodash'
import { 
  READ_EVENTS,
  DELETE_EVENT,
} from '../actions'

export default (events = {}, action) => {
  switch(action.type) {
    case READ_EVENTS:
      return _.mapKeys(action.res.data, 'id')
    case DELETE_EVENT:
      delete events[action.id]
      return { ...events }
    default:
      return events
  }
}
