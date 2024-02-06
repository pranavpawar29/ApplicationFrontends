import { useRef } from "react";
import Input from "../Input/Input";
import Modal from "../Modal";

export default function NewProject({onAdd, onCancel}) {
    const title = useRef();
    const description = useRef();
    const dueDate = useRef();
    const modal = useRef();

    function handleSave() {
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enetredDueDate = dueDate.current.value;

        if(enteredTitle.trim() === "" || enteredDescription.trim() === "" || enetredDueDate.trim === ""){
            modal.current.open();
            return;
        }

        onAdd({
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enetredDueDate
        })
    }
    return (
        <>
            <Modal ref={modal} buttonCaption="Okay">
                <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
                <p className="text-stone-600 mb-4">Oops... You Forgot to enter a value!!!</p>
                <p className="text-stone-600 mb-4">Please make sure you provide value for every field.</p>
            </Modal>
            <div className="w-[35rem] mt-16 ">
                <menu className="flex items-center justify-end gap-4 my-4">
                    <li><button onClick={onCancel} className="text-stone-800 hover:text-stone-950">Cancel</button></li>
                    <li><button onClick={handleSave} className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950" >Save</button></li>
                </menu>
                <div>
                    <Input label="Title" ref={title}/>
                    <Input label="Description" isTextArea ref={description}/>
                    <Input type="date" label="Due Date" ref={dueDate}/>
                </div>
            </div>
        </>
    );
}