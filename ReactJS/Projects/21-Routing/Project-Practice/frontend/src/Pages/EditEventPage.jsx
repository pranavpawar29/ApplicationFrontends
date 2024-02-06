import { useLoaderData } from "react-router-dom";
import EventForm from "../components/EventForm";


export default function EditEventPage() {
    const data = useLoaderData();
    return (
        <>
            <EventForm event={data.event} />
        </>
    );
}