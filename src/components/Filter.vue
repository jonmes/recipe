<template>
  <div>
    <div class="bg-grey col-12 mt-3 align-middle items-end flex">
      <button
        type="button"
        class="btn btn-light mr-10 shadow-sm"
        data-toggle="collapse"
        data-target="#filters"
      >
        Filters <i class="fa fa-filter"></i>
      </button>
      <input
        type="text"
        class="w-full border-2 hover:border-green p-2"
        placeholder="Search for Startups..."
        id="search-filter"
      />
    </div>

    <div id="filters" class="collapse">
      <hr class="solid mx-auto" />

      <div class="d-md-flex d-lg-flex d-xl-flex justify-content-around mx-auto">
        <div class="col-lg-4 col-xl-3 col-md-6">
          <article class="filter-group">
            <header class="card-header">
              <h6 class="title">Category</h6>
            </header>
            <div class="filter-content" id="collapse_aside1" style="">
              <div class="card-body">
                <label class="block">
                  <input type="checkbox" checked="" class="border-2" />
                  Vegetable
                </label>
                <label class="block">
                  <input type="checkbox" checked="" class="border-2" />
                  Fruit
                </label>
                <label>
                  <input type="checkbox" checked="" class="border-2" />
                  Meat
                </label>
                <label class="block">
                  <input type="checkbox" checked="" class="border-2" />
                  Breakfast
                </label>
                <label class="block">
                  <input type="checkbox" checked="" class="border-2" />
                  Lunch
                </label>
                <label class="block">
                  <input type="checkbox" checked="" class="border-2" />
                  Dinner
                </label>
              </div>
            </div>
          </article>
        </div>

        <div class="col-lg-4 col-xl-3 col-md-6">
          <article class="filter-group">
            <header class="card-header">
              <h6 class="title">Recipe</h6>
            </header>
            <div class="filter-content" id="collapse_aside1" style="">
              <div class="card-body">
                <label class="block">
                  <input type="checkbox" checked="" class="border-2" />
                  Carrot
                </label>
                <label class="block">
                  <input type="checkbox" checked="" class="border-2" />
                  Beef
                </label>
                <label>
                  <input type="checkbox" checked="" class="border-2" />
                  Egg
                </label>
                <label class="block">
                  <input type="checkbox" checked="" class="border-2" />
                  Onion
                </label>
                <label class="block">
                  <input type="checkbox" checked="" class="border-2" />
                  Honey
                </label>
                <label class="block">
                  <input type="checkbox" checked="" class="border-2" />
                  Wine
                </label>
              </div>
            </div>
          </article>
        </div>
        <div class="col-lg-4 col-xl-3 col-md-6">
          <article class="filter-group">
            <header class="card-header">
              <h6 class="title">Stage</h6>
            </header>
            <div class="filter-content" id="collapse_aside4" style="">
              <div class="card-body">
                <label class="custom-control">
                  <input
                    type="checkbox"
                    checked=""
                    class="custom-control-input"
                  />
                  <div class="custom-control-label">Completed</div>
                </label>
                <label class="custom-control">
                  <input
                    type="checkbox"
                    checked=""
                    class="custom-control-input"
                  />
                  <div class="custom-control-label">Processing</div>
                </label>
                <label class="custom-control">
                  <input
                    type="checkbox"
                    checked=""
                    class="custom-control-input"
                  />
                  <div class="custom-control-label">Pending</div>
                </label>
                <label class="custom-control">
                  <input
                    type="checkbox"
                    checked=""
                    class="custom-control-input"
                  />
                  <div class="custom-control-label">Something else</div>
                </label>
              </div>
            </div>
          </article>

          <a
            href="#"
            class="btn btn-medium button mt-6 mb-12 md:mb-0 md:mt-10 inline-block text-white bg-red-500 hover:bg-red-600 rounded-lg shadow mx-auto"
            data-abc="true"
            data-toggle="collapse"
            data-target="#filters"
            >Apply Now</a
          >
        </div>
      </div>
    </div>
  </div>
</template>
