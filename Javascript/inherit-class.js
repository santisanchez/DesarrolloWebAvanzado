class Component {
    constructor(props) {
        this.props = props
        this.state = {};
    }

}

class Teacher extends Component {
    constructor(props) {
        super(props);
        this.state = {
            givingCourse: ''
        }
    }
}

class Student extends Component {
    constructor(props) {
        super(...props);
    }
}

const teacher = new Teacher({
    name: 'Pearson',
    salary: 500
});
teacher.state = {
    givingCourse: 'Math'
};
console.log(teacher.state);