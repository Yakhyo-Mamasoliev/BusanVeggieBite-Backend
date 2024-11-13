console.log("Users frontend javascript file");

$(function () {
	$(".member-status").on("change", function (e) {
		const id = e.target.id,
			memberStatus = $(`#${id}.member-status`).val();

		// Change the color of the selected option based on its value
		const selectElement = $(this);
		selectElement.css("color", getColorForStatus(memberStatus));

		axios
			.post("/admin/user/edit", {
				_id: id,
				memberStatus: memberStatus,
			})
			.then((response) => {
				console.log("response: ", response);
				const result = response.data;

				if (result.data) {
					$(".member-status").blur();
				} else alert("User update failed");
			})
			.catch((err) => {
				console.log(err);
				alert("User update failed");
			});
	});

	// Function to get the color based on user status
	function getColorForStatus(status) {
		switch (status) {
			case "ACTIVE":
				return "#4CAF50"; // Green
			case "BLOCK":
				return "#FF9800"; // Orange
			case "DELETE":
				return "#F44336"; // Red
			default:
				return "#fff"; // Default white for unknown
		}
	}

	// Set initial color on page load based on existing statuses
	$(".member-status").each(function () {
		const initialStatus = $(this).val();
		$(this).css("color", getColorForStatus(initialStatus));
	});
});
