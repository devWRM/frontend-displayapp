import React, { Component } from 'react'

class DropDownButton extends Component {

    constructor() {
        super();
        this.state = {
            aroom: "sun room"
        }
    }

    handleAroomChange = event => {
        this.setState({
            aroom: event.target.value
        })
    }


    render() {
        return (
            <form>
                <div>
                    <label>SELECTIONS</label>
                    <select value={this.state.aroom} onChange={this.handleAroomChange}>
                        <option value="sun room">Sun Room</option>
                        <option value="basement">Basement</option>
                        <option value="attic">Attic</option>
                        <option value="dining room">Dining Room</option>
                    </select>
                </div>

                
            </form>
        )
    }
}

export default DropDownButton
