import React from 'react';
import HomeView from './HomeView'
import HomeModel from './HomeModel'

class HomeController extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            runStatus: 0,
            count: 0
        }
    }

    componentDidMount() {
        console.log(" Chamando componentDidMount ");
    }

    componentWillUnmount() {
        clearInterval(this.interval)
        console.log(" Chamando componentWillUnmount ");
    }
    onClickStart = () => {

        if (this.state.runStatus === 1) {
            this.setState({
                runStatus: 3
            })
        } else {
            if (this.interval) {
                clearInterval(this.interval);
            }

            this.setState({
                runStatus: 1
            })
            //Inicializando o timeout
            this.interval = setInterval(() => {
                //atualizando o contador
                console.log(" Atualizando a classe ");
                if (this.state.runStatus === 1) {
                    this.setState({
                        count: this.state.count + 1
                    })
                }
            }, 1000);
        }
    }


    onClickStop = () => {
        clearInterval(this.interval);
        this.setState({
            runStatus: 2,
            count: 0
        })
    }

    onClickErase = () => {
        this.setState({
            count: 0
        })
    }

    render() {
        return (
            <HomeView
                runStatus={this.state.runStatus}
                count={this.state.count}
                onClickStart={this.onClickStart}
                onClickStop={this.onClickStop}
                onClickErase={this.onClickErase}
            /> //Chamando o View
        )
    }
}
export default HomeController;