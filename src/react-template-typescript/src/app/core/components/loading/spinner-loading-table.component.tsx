import React from "react";

export const SpinnerLoadingTableComponent = ({ ...props }) => {
	return (
		<tr>
			<td className="text-center" {...props}>
				<div className="spinner-border spinner-border-sm" role="status">
					{/* <span className="sr-only">Cargando...</span> */}
				</div>{" "}
				Cargando datos...
			</td>
		</tr>
	);
};
