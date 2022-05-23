import React, { FC, useState, useEffect, useCallback } from 'react'
import axios from 'axios'
import IEvent from '../models/IEvent'
import EventCard from '../components/Events/EventCard'

const EventsView:FC = () => {

  const [url] = useState<string>('http://localhost:8080/events')

  const [events, setEvents] = useState<IEvent[]>([])

  const getEvents = useCallback(
    async () => {
      const { data, status } = await axios.get<IEvent[]>(url)

      if(status === 200) {
        setEvents(data)
      }
    }, [url])


  useEffect(() => {
    getEvents()
  }, [getEvents])

  return (
    <div className='events-view'>
      {!events.length && <p>No events to show</p>}
      { events.map(evt => (
        <EventCard evt={evt} key={evt.id} />
      )) }
    </div>
  )
}

export default EventsView