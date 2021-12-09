AFRAME.registerComponent("scuba", {
    schema: {
        speed_of_rotation: { type: "number", default: 0 },
        speed_of_ascend: { type: "number", default: 0 },
    },
    init: function () {
        window.addEventListener("keydown", e => {
            this.data.speed_of_rotation = this.el.getAttribute("rotation")
            this.data.speed_of_ascend = this.el.getAttribute("position")

            var scuba_rotation = this.data.speed_of_rotation
            var scuba_position = this.data.speed_of_ascend

            if (e.key === "ArrowRight") {
                if (scuba_rotation.x < 10) {
                    scuba_rotation.x += 0.5;
                    this.el.setAttribute("rotation", scuba_rotation);
                }
            }
            if (e.key === "ArrowLeft") {
                if (scuba_rotation.x > -10) {
                    scuba_rotation.x -= 0.5;
                    this.el.setAttribute("rotation", scuba_rotation);
                }
            }
            if (e.key === "ArrowUp") {
                if (scuba_rotation.z < 20) {
                    scuba_rotation.z += 0.5;
                    this.el.setAttribute("rotation", scuba_rotation);
                }
                if (scuba_position.y < 2) {
                    scuba_position.y += 0.01;
                    this.el.setAttribute("position", scuba_position);
                }
            }
            if (e.key === "ArrowDown") {
                if (scuba_rotation.z > -10) {
                    scuba_rotation.z -= 0.5;
                    this.el.setAttribute("rotation", scuba_rotation);
                }
                if (scuba_position.y > -2) {
                    scuba_position.y -= 0.01;
                    this.el.setAttribute("position", scuba_position);
                }


            }
        })
    },
})