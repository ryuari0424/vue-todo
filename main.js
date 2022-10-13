new Vue({
    el: "#app",
    data: {
        todos: [
            { task: '買い物', isCompleted: false },
            { task: '読書', isCompleted: false },
            { task: 'プログラミング', isCompleted: false },
        ],
        newTask: '',

    },

    methods: {
        addTodo: function () {
            if (this.newTask == '') return;
            this.todos.push(
                { task: this.newTask, isCompleted: false }
            );
            this.newTask = '';
        },

        deleteTodo: function (todo) {
            var index = this.todos.indexOf(todo);
            if (confirm('駆除するぞ?')) { 
                this.todos.splice(index, 1);
            }
        }
        
    }
})

