const form = document.getElementById("coverForm");

const output = document.getElementById("output");

const loading = document.getElementById("loading");

const copy = document.getElementById("copy");

form.addEventListener(
  "submit",

  async (e) => {
    e.preventDefault();

    loading.classList.remove("hide");

    try {
      const formData = new FormData();

      formData.append("name", document.getElementById("name").value);

      formData.append("role", document.getElementById("role").value);

      formData.append("company", document.getElementById("company").value);

      formData.append("skills", document.getElementById("skills").value);

      const file = document.getElementById("resume").files[0];

      if (file) {
        formData.append("resume", file);
      }

      const res = await fetch(
        "http://localhost:5000/generate",

        {
          method: "POST",

          body: formData,
        },
      );

      const data = await res.json();

      if (!data.success) {
        throw new Error();
      }

      output.innerHTML = marked.parse(data.coverLetter);
    } catch (err) {
      console.log(err);

      output.innerHTML = "Generation Failed";
    }

    loading.classList.add("hide");
  },
);

copy.onclick = () => {
  navigator.clipboard.writeText(output.innerText);

  alert("Copied");
};
