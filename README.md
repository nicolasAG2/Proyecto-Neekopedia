<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
        <link href="https://getbootstrap.com/docs/5.3/assets/css/docs.css" rel="stylesheet">
        <title>NEEKOPEDIA</title>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
        <link rel="stylesheet" href="style.css">
        <style>
            h1 {
                margin-left: 700px;
            }
        </style>
    </head>
<body>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand" href="#"><img width="200px" src="img/NEEKOPEDIA-ultima.png"></a>

          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
              <li class="nav-item">
                    <a class="nav-link active" id="white" aria-current="page" href="#"><b>INICIO</b></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" id="white" href="#"><b>CAMPEONES</b></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" id="white" href="#"><b>HISTORIA</b></a>
                  </li>
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" id="white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <b>CATEGORIAS</b>
                    </a>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="region.html"target="">REGION</a></li>
                      <li><a class="dropdown-item" href="#">LINEA</a></li>
                      <li><a class="dropdown-item" href="#">TIPO</a></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
    <br>
    <form class="row g-3">
        <h1>
        <div class="col-md-2">
          <label for="validationDefault01" class="form-label">First name</label>
          <input type="text" class="form-control" id="validationDefault01" required>
        </div>
        <div class="col-md-2">
          <label for="validationDefault02" class="form-label">Last name</label>
          <input type="text" class="form-control" id="validationDefault02" required>
        </div>
        <div class="col-md-2">
          <label for="validationDefaultUsername" class="form-label">Username</label>
          <div class="input-group">
            <span class="input-group-text" id="inputGroupPrepend2">@</span>
            <input type="text" class="form-control" id="validationDefaultUsername" aria-describedby="inputGroupPrepend2" required>
          </div>
        </div>
        <div class="col-md-2">
          <label for="validationDefault03" class="form-label">City</label>
          <input type="text" class="form-control" id="validationDefault03" required>
        </div>
        <div class="col-md-2">
          <label for="validationDefault04" class="form-label">State</label>
          <select class="form-select" id="validationDefault04" required>
            <option selected disabled value="">Choose...</option>
            <option>...</option>
          </select>
        </div>
        <div class="col-md-2">
          <label for="validationDefault05" class="form-label">Zip</label>
          <input type="text" class="form-control" id="validationDefault05" required>
        </div>
        <div class="col-md-2">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required>
            <label class="form-check-label" for="invalidCheck2">
              Agree to terms and conditions
            </label>
          </div>
        </div>
        <div class="col-md-2">
          <button class="btn btn-primary" type="submit">Submit form</button>
        </div>
        </h1>
      </form>
      
</body>
</html>
