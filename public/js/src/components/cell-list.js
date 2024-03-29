import Config from '../Config'

import Cell from './cell'

export default {
	props: ['cell'],
	components: {
		cell: Cell
	},
	render() {
		let label = 'empty';
		if (this.cell.value == Config.actors.COMPUTER)
			label = 'cross';
		else if (this.cell.value == Config.actors.PLAYER)
			label = 'circle';
		const inAttrs = { label: label };
		return (
			<div vOn:click={() => this.$emit('click', this.cell.id)} class="cell"><cell {...{ attrs: inAttrs }}   ></cell></div>
		)
	}
}
