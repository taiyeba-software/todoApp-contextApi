💡 In your case (Todos):
You could store them like this:

💾 Save todos:

            localStorage.setItem("todos", JSON.stringify(todos));

🔁 Load todos:

            const [todos, setTodos] = useState(() => {
            const saved = localStorage.getItem("todos");
            return saved ? JSON.parse(saved) : []; //GIVES YOU JS
            });

            // Update localStorage every time todos change
            useEffect(() => {
            localStorage.setItem("todos", JSON.stringify(todos));
            }, [todos]);


which method can query localstorage to give all the todos and insert in the todos in "const [todos, setTodos] = useState([])" todos?
            useEffect(() => {
            localStorage.setItem("todos", JSON.stringify(todos));/*if you are not talking about server side rendering you can */
            }, [todos]);

