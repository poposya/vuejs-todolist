window.onload=function(){
                Vue.component('TableComp', {
                    template: '#TableComp',
                    props: ['list']
                });

                Vue.component('ListComp', {
                    template: '#ListComp',
                    props: ['list']
                });

                Vue.component('BudgesComp', {
                    template: '#BudgesComp',
                    props: ['list']
                });

                var Sample = new Vue({
                    el: '#app',
                    data: {
                        name: 'Dima',
                        inputNewCourse: new String,
                        inputDeletedItem: new String,
                        preItemName: new String,
                        afterItemName: new String,
                        list: [
                            {name: "JavaScript Essential", passed: true},
                            {name: "JavaScript Advanced", passed: true},
                            {name: "HTML5/CSS3", passed: false},
                            {name: "HTML/CSS", passed: false},
                            {name: "AngularJS", passed: false}
                        ],
                        options: ["TableComp","ListComp","BudgesComp"],
                        current: 'TableComp'
                    },
                    methods: {
                        switchCont: function (cont) {
                            this.current = cont;
                        },
                        addNewItem: function(e) {
                            if (this.inputNewCourse) {
                                this.list.push(
                                { name: this.inputNewCourse, passed: false }
                                )
                            }
                            else {
                                e.preventDefault();
                                alert("Field input")
                            }
                            this.inputNewCourse = ''
                        },
                        deleteItem: function() {
                            for (let obj in this.list) {
                                if (this.list[obj].name == this.inputDeletedItem) {
                                    this.list.splice(obj,1);
                                    this.inputDeletedItem = '';
                                }
                            }
                        },
                        editCourseName: function() {
                            if (this.afterItemName && this.preItemName) {
                                for (let obj in this.list) {
                                    if (this.list[obj].name == this.preItemName) {
                                        this.list[obj].name = this.afterItemName;
                                }
                            }
                            }
                        },
                        deleteCourse: function (index) {
                            console.log('h');
                            this.list.splice(index, 1);
                        }
                    }
                });
			}