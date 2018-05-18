const under25TrialsQueryUrl = 'https://clinicaltrialsapi.cancer.gov/v1/clinical-trials?eligibility.structured.max_age_number_lte=25&eligibility.structured.min_age_number_gte=0&size=50';
const childTrialsQueryUrl = 'https://clinicaltrialsapi.cancer.gov/v1/clinical-trials?eligibility.structured.max_age_number_lte=25&eligibility.structured.min_age_number_gte=0&size=50';
const cogTrialsUrl = 'https://clinicaltrialsapi.cancer.gov/v1/clinical-trials?lead_org=Childrens%20Oncology%20Group&size=50'

function renderResults(results) {
    const source = $("#trials-template").html();
    const template = Handlebars.compile(source);
    $('#results').append(template(results));
}

$(document).ready(() => {
    function getTrials() {
        $.ajax({
            url: cogTrialsUrl,
            // url: childTrialsQueryUrl,
            method: 'GET',
            success: function (results) {
                debugger;
                renderResults(results);
            }
        });
    }

    getTrials();
});
